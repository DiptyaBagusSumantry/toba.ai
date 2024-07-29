import { ref, computed } from '@vue/composition-api'
import { $themeColors } from '@themeConfig'
import { formatDate } from '@core/utils/filter'
import { random, meanBy } from 'lodash'

import 'vue-flatpickr-component'
import store from '@/store'

export default function useDashboardStatistic() {
  // References
  const followersCountSeriesData = ref([])
  const followersGrowthSeriesData = ref([])
  const followerGrowthRate = ref(null)
  const followerGrowthRateGrowth = ref(null)
  const mediaCountSeriesData = ref([])
  const mediaGrowthSeriesData = ref([])
  const reachAverage = ref(null)
  const reachAverageGrowth = ref(null)
  const reachSeriesData = ref([])
  const impressionsAverage = ref(null)
  const impressionsAverageGrowth = ref(null)
  const impressionsSeriesData = ref([])
  const likeCommentSeriesData = ref([])
  const engagementGrowthRate = ref(null)
  const engagementGrowthRateGrowth = ref(null)
  const engagementGrowthRateSeriesData = ref([])

  // Computed
  const accountData = computed(() => store.state['app-dashboard'].accountData)
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
  const likeSeriesData = computed(() => likeCommentSeriesData.value.map(data => ({
    x: data.x,
    y: data.y.like_count,
  })))
  const commentsSeriesData = computed(() => likeCommentSeriesData.value.map(data => ({
    x: data.x,
    y: data.y.comments_count,
  })))
  const engagementSeriesData = computed(() => likeCommentSeriesData.value.map(data => ({
    x: data.x,
    y: data.y.like_count + data.y.comments_count,
  })))
  // Charts Data
  const followersGrowthChartData = computed(() => ({
    series: [
      {
        name: 'Follower Baru',
        data: followersGrowthSeriesData.value,
      },
    ],
  }))
  const mediaGrowthChartData = computed(() => ({
    series: [
      {
        name: 'Konten Terposting',
        data: mediaGrowthSeriesData.value,
      },
    ],
  }))
  const reachChartData = computed(() => ({
    series: [
      {
        name: 'Reach',
        data: reachSeriesData.value,
      },
    ],
  }))
  const impressionsChartData = computed(() => ({
    series: [
      {
        name: 'Impression',
        data: impressionsSeriesData.value,
      },
    ],
  }))
  const engagementGrowthRateChartData = computed(() => ({
    series: [
      {
        name: 'Engagement Rate',
        data: engagementGrowthRateSeriesData.value,
      },
    ],
    chartOptions: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        offsetX: -10,
      },
      stroke: {
        curve: 'smooth',
        width: 4,
      },
      grid: {
        borderColor: '#ebe9f1',
        padding: {
          top: -20,
          bottom: 5,
          left: 20,
        },
      },
      legend: {
        show: false,
      },
      colors: [$themeColors.warning],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          inverseColors: false,
          gradientToColors: ['#ffdf40'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 0,
        hover: {
          size: 5,
        },
      },
      xaxis: {
        labels: {
          offsetY: 5,
          style: {
            colors: '#b9b9c3',
            fontSize: '0.857rem',
          },
          formatter: val => formatDate(val, { month: '2-digit', day: '2-digit' }),
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        tickPlacement: 'on',
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.857rem',
          },
          formatter(val) {
            return `${(val * 100).toFixed(2)}%`
          },
        },
      },
      tooltip: { enabled: false },
    },
  }))
  const followerGrowthRateChartData = computed(() => ({
    series: [
      {
        name: 'Followers',
        data: followersCountSeriesData.value,
      },
    ],
    chartOptions: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        offsetX: -10,
      },
      stroke: {
        curve: 'smooth',
        width: 4,
      },
      grid: {
        borderColor: '#ebe9f1',
        padding: {
          top: -20,
          bottom: 5,
          left: 20,
        },
      },
      legend: {
        show: false,
      },
      colors: ['#b122e5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          inverseColors: false,
          gradientToColors: ['#ff63de'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 0,
        hover: {
          size: 5,
        },
      },
      xaxis: {
        labels: {
          offsetY: 5,
          style: {
            colors: '#b9b9c3',
            fontSize: '0.857rem',
          },
          formatter: val => formatDate(val, { month: '2-digit', day: '2-digit' }),
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        tickPlacement: 'on',
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.857rem',
          },
        },
      },
      tooltip: { enabled: false },
    },
  }))
  const engagementAreaChartData = computed(() => ({
    series: [
      {
        name: 'Like',
        data: likeSeriesData.value,
      },
      {
        name: 'Comment',
        data: commentsSeriesData.value,
      },
      {
        name: 'Engagement',
        data: engagementSeriesData.value,
      },
    ],
    chartOptions: {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        stacked: true,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        curve: 'straight',
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '12.8px',
        fontFamily: 'Montserrat',
        fontWeight: 300,
        inverseOrder: false,
        markers: {
          width: 32,
          height: 16,
          radius: 4,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        labels: {
          formatter: val => formatDate(val, { month: '2-digit', day: '2-digit' }),
        },
      },
      yaxis: {
        // opposite: isRtl
      },
      fill: {
        opacity: 1,
        type: 'solid',
      },
      tooltip: { enabled: false },
      colors: [$themeColors.primary, '#84d0ff', '#edf1f4'],
    },
  }))

  // Methods
  const getFollowersCountSeriesData = () => dateList.value.map(date => ({
    x: new Date(date),
    y: random(1000, 5000),
  }))
  const getFollowersGrowthSeriesData = () => dateList.value.map(date => ({
    x: new Date(date),
    y: random(-20, 20),
  }))
  const getMediaCountSeriesData = () => dateList.value.map(date => ({
    x: new Date(date),
    y: random(900, 1000),
  }))
  const getMediaGrowthSeriesData = () => dateList.value.map(date => ({
    x: new Date(date),
    y: random(0, 10),
  }))
  const getReachSeriesData = () => dateList.value.map(date => ({
    x: new Date(date),
    y: random(100, 1000),
  }))
  const getImpressionsSeriesData = () => dateList.value.map(date => ({
    x: new Date(date),
    y: random(100, 1000),
  }))
  const getLikeCommentSeriesData = () => dateList.value.map(date => ({
    x: new Date(date),
    y: {
      like_count: random(0, 500),
      comments_count: random(0, 500),
      like_count_growth: random(-100, 100),
      comments_count_growth: random(-100, 100),
    },
  }))
  const getEngagementGrowthRateSeriesData = () => dateList.value.map(date => ({
    x: new Date(date),
    y: random(0.1, 0.5, true),
  }))
  const calculatePerformaStatistics = async () => {
    followersCountSeriesData.value = getFollowersCountSeriesData()
    followersGrowthSeriesData.value = getFollowersGrowthSeriesData()
    followerGrowthRate.value = `${random(-0.5, 0.5, true)}%`
    followerGrowthRateGrowth.value = `${random(-0.5, 0.5, true)}%`
    mediaCountSeriesData.value = getMediaCountSeriesData()
    mediaGrowthSeriesData.value = getMediaGrowthSeriesData()
    reachSeriesData.value = getReachSeriesData()
    reachAverage.value = meanBy(reachSeriesData.value, 'y')
    reachAverageGrowth.value = `${random(-100, 100)}%`
    impressionsSeriesData.value = getImpressionsSeriesData()
    impressionsAverage.value = meanBy(impressionsSeriesData.value, 'y')
    impressionsAverageGrowth.value = `${random(-100, 100)}%`
    likeCommentSeriesData.value = getLikeCommentSeriesData()
    engagementGrowthRate.value = `${random(-0.5, 0.5, true)}%`
    engagementGrowthRateGrowth.value = `${random(-0.5, 0.5, true)}%`
    engagementGrowthRateSeriesData.value = getEngagementGrowthRateSeriesData()
  }

  return {
    // Computed
    accountData,
    followersCountSeriesData,
    followersGrowthSeriesData,
    followersGrowthChartData,
    followerGrowthRate,
    followerGrowthRateChartData,
    followerGrowthRateGrowth,
    mediaCountSeriesData,
    mediaGrowthSeriesData,
    mediaGrowthChartData,
    reachAverage,
    reachAverageGrowth,
    reachSeriesData,
    reachChartData,
    impressionsSeriesData,
    impressionsAverage,
    impressionsAverageGrowth,
    impressionsChartData,
    engagementGrowthRate,
    engagementGrowthRateGrowth,
    engagementGrowthRateSeriesData,
    engagementGrowthRateChartData,
    engagementAreaChartData,

    // Methods
    calculatePerformaStatistics,
  }
}
