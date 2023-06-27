import axios from 'axios'
import { defineStore } from 'pinia'

export interface City {
  name: string
  lat: number
  lon: number
}

interface State {
  cityList: Map<string, City>
  selectedCity: City
  isLoading: boolean
  weatherDescription: string
}

export const useWeatherStore = defineStore({
  id: 'weather',
  state: (): State => {
    return {
      cityList: new Map<string, City>(),
      selectedCity: {
        name: '',
        lat: 0.0,
        lon: 0.0
      },
      isLoading: true,
      weatherDescription: ''
    }
  },
  getters: {},
  actions: {
    prepareCityList() {
      this.cityList.set('Sapporo', {
        name: '札幌',
        lat: 43.061936,
        lon: 141.3542924
      })
      this.cityList.set('Tokyo', {
        name: '東京',
        lat: 35.6828387,
        lon: 139.7594549
      })
      this.cityList.set('Osaka', {
        name: '大阪',
        lat: 34.6937569,
        lon: 135.5014539
      })
    },
    async recieveWeatherInfo(id: string) {
      this.selectedCity = this.cityList.get(id) as City
      const weatherInfoUrl = 'https://api.openweathermap.org/data/2.5/weather'
      const params: {
        lang: string
        lat: string
        lon: string
        appId: string
      } = {
        lang: 'ja',
        lat: this.selectedCity.lat.toString(),
        lon: this.selectedCity.lon.toString(),
        appId: import.meta.env.VITE_WEATHER_APP_KEY,
      }
      const queryParams = new URLSearchParams(params)
      const urlFull = `${weatherInfoUrl}?${queryParams}`
      const response = await axios.get(urlFull)
      const weatherInfoJSON = await response.data
      const weatherArray = weatherInfoJSON.weather
      const weather = weatherArray[0]
      this.weatherDescription = weather.description
      this.isLoading = false
    }
  }
})
