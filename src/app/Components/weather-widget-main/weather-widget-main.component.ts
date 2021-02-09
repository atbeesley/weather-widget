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
    console.log(this.WeatherData);
  }

  getWeatherData(){
    let data = JSON.parse('{"coord":{"lon":-3.4589,"lat":56.0716},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":274.32,"feels_like":266.67,"temp_min":273.15,"temp_max":275.93,"pressure":1018,"humidity":80},"visibility":10000,"wind":{"speed":7.72,"deg":80},"snow":{"1h":0.1},"clouds":{"all":90},"dt":1612697240,"sys":{"type":1,"id":1442,"country":"GB","sunrise":1612684611,"sunset":1612717150},"timezone":0,"id":2650732,"name":"Dunfermline","cod":200}');
    this.setWeatherData(data);
  }

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset*1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleString();
    console.log(sunsetTime);
  }

}
