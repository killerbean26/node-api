const should = require('chai').should(),
      api = require('./')

describe('DEFAULT', function () {
  it('/all', async function () {
    const data = await api.all()
    data.should.be.a('object')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
    data.should.have.property('affectedCountries')
  })
  
  it('/states', async function () {
    const data = await api.states()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('state')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('active')
    }
  })

  it('/states/michigan', async function () {
    const data = await api.states({state:'michigan'})
    data.should.be.a('object')
    data.should.have.property('state')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('active')
  })

  it('/yesterday',async function () {
    const data = await api.yesterday()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/yesterday/austria',async function () {
    const data = await api.yesterday({country:'austria'})
    data.should.be.a('object')
    data.should.have.property('country')
    data.should.have.property('countryInfo')
    data.countryInfo.should.have.property('_id')
    data.countryInfo.should.have.property('iso2')
    data.countryInfo.should.have.property('iso3')
    data.countryInfo.should.have.property('lat')
    data.countryInfo.should.have.property('long')
    data.countryInfo.should.have.property('flag')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
  })
})

describe('JHUCSSE', function() {
  it('/v2/jhucsse', async function () {
    const data = await api.jhucsse.all()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('province')
      row.should.have.property('updatedAt')
      row.should.have.property('stats')
      row.stats.should.have.property('confirmed')
      row.stats.should.have.property('deaths')
      row.stats.should.have.property('recovered')
      row.should.have.property('coordinates')
      row.coordinates.should.have.property('longitude')
      row.coordinates.should.have.property('latitude')
    }
  })

  it('/v2/jhucsse/counties', async function () {
    const data = await api.jhucsse.counties()
    data.should.be.a('array')
    for(let row of data){
      row.should.have.property('country')
      row.should.have.property('province')
      row.should.have.property('county')
      row.should.have.property('updatedAt')
      row.should.have.property('stats')
      row.stats.should.have.property('confirmed')
      row.stats.should.have.property('deaths')
      row.stats.should.have.property('recovered')
      row.should.have.property('coordinates')
      row.coordinates.should.have.property('longitude')
      row.coordinates.should.have.property('latitude')
    }
  })

  it('/v2/jhucsse/counties/abbeville', async function () {
    let data = await api.jhucsse.counties('abbeville')
    data.should.be.a('array')
    for(let row of data){
      row.should.have.property('country')
      row.should.have.property('province')
      row.should.have.property('county')
      row.should.have.property('updatedAt')
      row.should.have.property('stats')
      row.stats.should.have.property('confirmed')
      row.stats.should.have.property('deaths')
      row.stats.should.have.property('recovered')
      row.should.have.property('coordinates')
      row.coordinates.should.have.property('longitude')
      row.coordinates.should.have.property('latitude')
    }
  })
})

describe('HISTORICAL', function () {
  it('/v2/historical', async function () {
    const data = await api.historical.countries()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('province')
      row.should.have.property('timeline')
      row.timeline.should.be.a('object')
      row.timeline.should.have.property('cases')
      row.timeline.cases.should.be.a('object')
      row.timeline.should.have.property('deaths')
      row.timeline.deaths.should.be.a('object')
      row.timeline.should.have.property('recovered')
      row.timeline.recovered.should.be.a('object')
    }
  })

  it('/v2/historical/all', async function () {
    const data = await api.historical.all()
    data.should.be.a('object')
    data.should.have.property('cases')
    data.cases.should.be.a('object')
    data.should.have.property('deaths')
    data.deaths.should.be.a('object')
    data.should.have.property('recovered')
    data.recovered.should.be.a('object')
  })

  it('/v2/historical/china', async function () {
    const data = await api.historical.countries({country:'china'})
    data.should.be.a('object')
    data.should.have.property('country')
    data.should.have.property('provinces')
    data.provinces.should.be.a('array')
    data.should.have.property('timeline')
    data.timeline.should.be.a('object')
    data.timeline.should.have.property('cases')
    data.timeline.cases.should.be.a('object')
    data.timeline.should.have.property('deaths')
    data.timeline.deaths.should.be.a('object')
    data.timeline.should.have.property('recovered')
    data.timeline.recovered.should.be.a('object')
  })

  it('/v2/historical/china/hubei', async function () {
    const data = await api.historical.countries({country:'china', province:'hubei'})
    data.should.be.a('object')
    data.should.have.property('country')
    data.should.have.property('province')
    data.should.have.property('timeline')
    data.timeline.should.be.a('object')
    data.timeline.should.have.property('cases')
    data.timeline.cases.should.be.a('object')
    data.timeline.should.have.property('deaths')
    data.timeline.deaths.should.be.a('object')
    data.timeline.should.have.property('recovered')
    data.timeline.recovered.should.be.a('object')
  })
})

describe('COUNTRIES', function () {
  it('/countries', async function() {
    const data = await api.countries()
    data.should.be.a('array')
    for(let row of data) {
      row.should.have.property('country')
      row.should.have.property('countryInfo')
      row.countryInfo.should.have.property('_id')
      row.countryInfo.should.have.property('iso2')
      row.countryInfo.should.have.property('iso3')
      row.countryInfo.should.have.property('lat')
      row.countryInfo.should.have.property('long')
      row.countryInfo.should.have.property('flag')
      row.should.have.property('cases')
      row.should.have.property('todayCases')
      row.should.have.property('deaths')
      row.should.have.property('todayDeaths')
      row.should.have.property('recovered')
      row.should.have.property('active')
      row.should.have.property('critical')
      row.should.have.property('casesPerOneMillion')
      row.should.have.property('deathsPerOneMillion')
      row.should.have.property('updated')
    }
  })

  it('/countries/austria', async function() {
    const data = await api.countries({country:'austria'})
    data.should.be.a('object')
    data.should.have.property('country')
    data.should.have.property('countryInfo')
    data.countryInfo.should.have.property('_id')
    data.countryInfo.should.have.property('iso2')
    data.countryInfo.should.have.property('iso3')
    data.countryInfo.should.have.property('lat')
    data.countryInfo.should.have.property('long')
    data.countryInfo.should.have.property('flag')
    data.should.have.property('cases')
    data.should.have.property('todayCases')
    data.should.have.property('deaths')
    data.should.have.property('todayDeaths')
    data.should.have.property('recovered')
    data.should.have.property('active')
    data.should.have.property('critical')
    data.should.have.property('casesPerOneMillion')
    data.should.have.property('deathsPerOneMillion')
    data.should.have.property('updated')
  })
})