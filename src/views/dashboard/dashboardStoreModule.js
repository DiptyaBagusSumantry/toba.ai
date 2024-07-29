import axios from '@axios'
import { computed } from '@vue/composition-api'
import { datesAreOnSameDate } from '@core/utils/utils'
import { meanBy } from 'lodash'
import 'vue-flatpickr-component'

export default {
  namespaced: true,
  state: {
    accountData: {},
    loadingProcess: false,
  },
  getters: {
    performaData: state => {
      const { accountData } = state

      const performaData = {
        meanEngagementRate: null,
        followers: null,
        meanLike: null,
        meanComments: null,
        updatedTimestamp: null,
        growth: {
          meanEngagementRate: null,
          followers: null,
          meanLike: null,
          meanComments: null,
        },
      }

      if (accountData.user_data.length > 0) {
        const dateList = computed(() => {
          let diffInDay = 7
          const endDate = new Date()
          const dates = []
          endDate.setDate(endDate.getDate() + 1)
          while (diffInDay > 0) {
            dates.push(endDate.setDate(endDate.getDate() - 1))
            diffInDay -= 1
          }
          return dates.reverse()
        })

        // Clean followers count data
        let defaultfollowersCount = null
        const followersCountData = dateList.value.map(date => {
          let followersCount = defaultfollowersCount
          const userData = accountData.user_data.find(data => datesAreOnSameDate(date, data.updated_timestamp))
          if (userData) {
            followersCount = userData.followers_count
            defaultfollowersCount = followersCount
          }
          if (followersCount === null) {
            followersCount = accountData.user_data[0].followers_count
          }
          return followersCount
        })

        const latesFollowersCount = followersCountData.slice(-1)[0]
        performaData.followers = latesFollowersCount
        performaData.growth.followers = performaData.followers - followersCountData.slice(-2)[0]
      }

      if (accountData.latest_week_media.length > 0) {
        performaData.meanLike = meanBy(accountData.latest_week_media, 'like_count')
        performaData.meanComments = meanBy(accountData.latest_week_media, 'comments_count')

        if (performaData.followers !== null) {
          if (performaData.followers === 0) {
            performaData.meanEngagementRate = 0
          } else {
            performaData.meanEngagementRate = ((performaData.meanLike + performaData.meanComments) / performaData.followers) * 100
          }
        }
      }

      if (accountData.previous_week_media.length > 0) {
        const meanLikeBefore = meanBy(accountData.previous_week_media, 'like_count')
        const meanCommentsBefore = meanBy(accountData.previous_week_media, 'comments_count')

        performaData.growth.meanLike = performaData.meanLike - meanLikeBefore
        performaData.growth.meanComments = performaData.meanComments - meanCommentsBefore

        let meanEngagementRateBefore = null
        if (performaData.followers !== null) {
          if (performaData.followers === 0) {
            meanEngagementRateBefore = 0
          } else {
            meanEngagementRateBefore = ((meanLikeBefore + meanCommentsBefore) / performaData.followers) * 100
          }
        }
        if (meanEngagementRateBefore !== null) {
          performaData.growth.meanEngagementRate = performaData.meanEngagementRate - meanEngagementRateBefore
        }
      }

      return performaData
    },
    topMediaData: state => {
      const { accountData } = state

      let mediaData = {
        like_count: null,
        comments_count: null,
        engagement_rate: null,
        growth: {
          like_count: null,
          comments_count: null,
          engagement_rate: null,
        },
      }

      if (accountData.user_data) {
        let followersCount = null
        if (accountData.user_data) {
          followersCount = accountData.user_data.length > 0 ? accountData.user_data.slice(-1)[0].followers_count : followersCount
        }

        if (accountData.latest_week_media && accountData.latest_week_media.length > 0) {
          const topMediaData = accountData.latest_week_media
            .reduce((first, next) => {
              const firstEngagement = first.comments_count + first.like_count
              const nextEngagement = next.comments_count + next.like_count

              if (nextEngagement > firstEngagement) {
                return next
              }
              if (nextEngagement === firstEngagement) {
                const firstDate = new Date(first.timestamp)
                const nextDate = new Date(next.timestamp)
                if (nextDate > firstDate) {
                  return next
                }
              }

              return first
            })

          mediaData = {
            ...mediaData,
            ...topMediaData,
          }

          const allMedia = [...accountData.latest_week_media, ...accountData.previous_week_media]
          const index = allMedia.findIndex(data => data.id === mediaData.id)
          const mediaDataBefore = allMedia[index + 1] ? allMedia[index + 1] : null

          if (mediaDataBefore) {
            if (followersCount === 0) {
              mediaData.engagement_rate = 0
              mediaData.growth.engagement_rate = 0
            } else {
              const mediaEngagement = mediaData.comments_count + mediaData.like_count
              const mediaEngagementBefore = mediaDataBefore.comments_count + mediaDataBefore.like_count
              mediaData.engagement_rate = `${(mediaEngagement / followersCount) * 100}%`
              mediaDataBefore.engagement_rate = `${(mediaEngagementBefore / followersCount) * 100}%`
              mediaData.growth.engagement_rate = `${((mediaEngagement - mediaEngagementBefore) / followersCount) * 100}%`
              mediaData.growth.like_count = mediaData.like_count - mediaDataBefore.like_count
              mediaData.growth.comments_count = mediaData.comments_count - mediaDataBefore.comments_count
            }
          }
        }
      }
      return mediaData
    },
  },
  mutations: {
    SET_ACCOUNT_DATA(state, accountData) {
      state.accountData = accountData
    },
    SET_LOADING_PROCESS(state, status) {
      state.loadingProcess = status
    },
  },
  actions: {
    fetchAccountData({ commit }, username) {
      commit('SET_LOADING_PROCESS', true)
      return new Promise((resolve, reject) => {
        axios
          .get(`users/${username}`)
          .then(response => {
            commit('SET_LOADING_PROCESS', false)
            commit('SET_ACCOUNT_DATA', response.data)
            resolve(response)
          })
          .catch(error => {
            commit('SET_LOADING_PROCESS', false)
            reject(error)
          })
      })
    },
  },
}
