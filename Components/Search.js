import React, { useState } from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  background: #1e213a;
  position: relative;
`
const ToggleBtn = styled.button`
  // font-family: Raleway;
  padding: 11px 18px;
  margin-top: 18px;
  margin-left: 11px;
  box-sizing: border-box;
  border: none;
  color: #e7e7eb;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  background-color: rgba(136, 134, 157);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 76px;
  border-radius: 0.125rem;
  cursor: pointer;
`
const FormContainer = styled.div`
  background: #1e213a;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: ;
`
const CloseToggleBtn = styled.button`
  border: none;
  cursor: pointer;
  margin-top: 18px;
  margin-right: 20px;
  background: #1e213a;
  box-sizing: border-box;
  padding: 0;
  font-size: 30px;
  line-height: 44px;
  color: rgb(231, 231, 235);
  position: absolute;
  right: 0;
  font-weight: 600;
  top: 0;
`
const Form = styled.form`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Input = styled.input`
  outline: none;
  background: #1e213a;
  padding: 8px;
  border: 2px solid rgba(160, 159, 177);
`

const SubmitBtn = styled.button`
  margin-left: 8px;
  background: blue;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px 16px;
`

const Loading = styled.h1``

const ActualWeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 105px;
  color: white;
  // font-family: Raleway;
  font-style: normal;
`
const WeatherImage = styled.img`
  width: 100%;
  margin-bottom: 23px;
  max-width: max-content;
`
const WeatherName = styled.span`
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #a09fb1;
  margin-bottom: 48px;
`
const WeatherDate = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #88869d;
  margin-bottom: 33px;
`
const CityTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #88869d;
`

function Search({
  cityTitle,
  Searchitem,
  fetchingWeather,
  actualWeatherDetails,
}) {
  const [showForm, setShowForm] = useState(false)

  function showSearch() {
    setShowForm(!showForm)
  }

  return (
    <SearchContainer>
      <ToggleBtn onClick={showSearch}>Search for places</ToggleBtn>
      {showForm ? (
        <FormContainer>
          <CloseToggleBtn onClick={showSearch}>
            X
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg> */}
          </CloseToggleBtn>
          <Form onSubmit={Searchitem}>
            <Input type='text' name='location' required />
            <SubmitBtn type='submit'>Search</SubmitBtn>
          </Form>
          <SubmitBtn type='button' onClick={fetchingWeather}>
            {cityTitle}
          </SubmitBtn>
        </FormContainer>
      ) : null}
      {actualWeatherDetails === undefined ? (
        <Loading>Loading ...</Loading>
      ) : (
        <ActualWeatherDetails>
          <WeatherImage
            src={`https://www.metaweather.com//static/img/weather/${actualWeatherDetails.weather_state_abbr}.svg`}
          />
          <WeatherName>{actualWeatherDetails.weather_state_name}</WeatherName>
          <WeatherDate>{actualWeatherDetails.applicable_date}</WeatherDate>
          <CityTitle>{cityTitle}</CityTitle>
        </ActualWeatherDetails>
      )}
    </SearchContainer>
  )
}

export default Search

// function OpenToggle() {
//     const menuDrawer = document.querySelector(".menu-drawer");
//     menuDrawer.className += " open";
// };

// function CloseToggle() {
//     const menuDrawer = document.querySelector(".menu-drawer");
//     menuDrawer.classList.remove("open");
// };
