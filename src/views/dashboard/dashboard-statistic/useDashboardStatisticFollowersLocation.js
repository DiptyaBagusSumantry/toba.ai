import { ref } from '@vue/composition-api'
import {
  random, orderBy, sumBy,
} from 'lodash'

export default function useDashboardStatisticFollowersLocation() {
  const followersCityPersentageData = ref([])
  const followersCountryPersentageData = ref([])

  const listOfCountries = [{
    country: 'Indonesia',
    latitude: -5,
    longitude: 120,
    value: random(100, 500),
  }, {
    country: 'Japan',
    latitude: 36,
    longitude: 138,
    value: random(100, 500),
  }, {
    country: 'United States',
    latitude: 38,
    longitude: -97,
    value: random(101, 500),
  }, {
    country: 'Malaysia',
    latitude: 2.5,
    longitude: 112.5,
    value: random(101, 500),
  }, {
    country: 'Brazil',
    latitude: -10,
    longitude: -55,
    value: random(101, 500),
  }]
  const listOfCities = [{
    city: 'Jakarta',
    country: 'Indonesia',
    value: random(1, 100),
  }, {
    city: 'Tokyo',
    country: 'Japan',
    value: random(1, 100),
  }, {
    city: 'New York',
    country: 'United States',
    value: random(1, 100),
  }, {
    city: 'Johor',
    country: 'Malaysia',
    value: random(1, 100),
  }, {
    city: 'Rio de Jeneiro',
    country: 'Brazil',
    value: random(1, 100),
  }]

  // Methods
  const getFollowersCityPersentageData = () => {
    const followersData = orderBy(listOfCities, ['value', 'city'], ['desc', 'asc'])
    const totalValues = sumBy(followersData, 'value')
    return followersData.map(data => ({
      ...data,
      value: `${(data.value / totalValues) * 100}%`,
    }))
  }
  const getFollowersCountryPersentageData = () => new Promise(resolve => {
    const followersData = orderBy(listOfCountries, ['value', 'country'], ['desc', 'asc'])
    const totalValues = sumBy(followersData, 'value')
    resolve(followersData.map(data => ({
      ...data,
      value: `${(data.value / totalValues) * 100}%`,
    })))
  })

  return {
    // Refs
    followersCityPersentageData,
    followersCountryPersentageData,
    // Methods
    getFollowersCityPersentageData,
    getFollowersCountryPersentageData,
  }
}
