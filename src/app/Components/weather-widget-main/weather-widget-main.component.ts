import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  WeatherData: any;
  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    // console.log(this.WeatherData);
  }

  getWeatherData(){
    let data = JSON.parse('{"coord":{"lon":-3.4589,"lat":56.0716},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":279.18,"feels_like":272.46,"temp_min":278.71,"temp_max":280.15,"pressure":1005,"humidity":87},"visibility":10000,"wind":{"speed":7.72,"deg":220,"gust":12.86},"clouds":{"all":75},"dt":1613332610,"sys":{"type":1,"id":1442,"country":"GB","sunrise":1613288495,"sunset":1613322881},"timezone":0,"id":2650732,"name":"Dunfermline","cod":200}');
    this.setWeatherData(data);
  }

  setWeatherData(data){
    this.WeatherData = data;

    let sunsetTime = new Date(this.WeatherData.sys.sunset*1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleString();
    // console.log(this.WeatherData.sunset_time);

    let sunriseTime = new Date(this.WeatherData.sys.sunrise*1000);
    this.WeatherData.sunrise_time = sunriseTime.toLocaleString();
    // console.log(sunriseTime);

    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.toLocaleTimeString() < sunsetTime.toLocaleTimeString());
    // console.log("is it daytime? " + this.WeatherData.isDay);

    this.WeatherData.temp_celsius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    console.log(this.WeatherData.temp_celsius);

    this.WeatherData.temp_min= (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    console.log(this.WeatherData.temp_min);

    this.WeatherData.temp_max= (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    console.log(this.WeatherData.temp_max);

    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    console.log(this.WeatherData.temp_feels_like);
  }

}
