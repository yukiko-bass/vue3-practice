import { defineStore } from 'pinia'

export interface City {
  name: string
  q: string
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
        q: ''
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
        q: 'Sapporo'
      })
      this.cityList.set('Tokyo', {
        name: '東京',
        q: 'Tokyo'
      })
      this.cityList.set('Osaka', {
        name: '大阪',
        q: 'Osaka'
      })
    },
    async recieveWeatherInfo(id: string) {
      this.selectedCity = this.cityList.get(id) as City
      const weatherInfoUrl = 'https://api.openweathermap.org/data/2.5/weather'
      const params: {
        lang: string
        q: string
        appId: string
      } = {
        lang: 'ja',
        q: this.selectedCity.q,
        appId: import.meta.env.VITE_WEATHER_APP_KEY
      }
      const queryParams = new URLSearchParams(params)
      const urlFull = `${weatherInfoUrl}?${queryParams}`
      const response = await fetch(urlFull)
      const weatherInfoJSON = await response.json()
      const weatherArray = weatherInfoJSON.weather
      const weather = weatherArray[0]
      this.weatherDescription = weather.description
      this.isLoading = false
    }
  }
})
