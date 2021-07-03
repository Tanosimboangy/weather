import React, { useState } from 'react';
import styled from "styled-components"

const SearchContainer = styled.div`
    background: #1E213A;
    position: relative;
`
const ToggleBtn = styled.button`
    // font-family: Raleway;
    padding: 11px 18px;

    // margin-top: 18px;
    // margin-left: 11px;
    // box-sizing: border-box;
    // border: none;
    // color: #E7E7EB;
    // font-style: normal;
    // font-weight: 500;
    // font-size: 16px;
    // line-height: 19px;
    -tw-bg-opacity: 1;
    background-color: rgba(136,134,157,var(--tw-bg-opacity));
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 76px;
    border-radius: .125rem;
`
const FormContainer = styled.div`
    position: absolute;
    top: 0;
    left: -300px;
    background: #1E213A;
`
const CloseToggleBtn = styled.button`
     // font-family: Raleway;
    margin-top: 18px;
    margin-left: 11px;
    padding: 11px 18px;
    box-sizing: border-box;
    border: none;
    color: #E7E7EB;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    background: #6E707A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 76px;
`
const Form = styled.form``

const Input = styled.input``

const SubmitBtn = styled.button``

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
    color: #A09FB1;
    margin-bottom: 48px;
`
const WeatherDate = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #88869D;
    margin-bottom: 33px;
`
const CityTitle = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #88869D;
`

function Search({cityTitle, Searchitem, fetchingWeather, actualWeatherDetails}) {
    const [showForm, setShowForm] = useState(false)

    function showSearch() {
        setShowForm(!showForm);
    }

    return (
        <SearchContainer>
            <ToggleBtn onClick={showSearch}>Search for places</ToggleBtn>
            {
                showForm ?
                <FormContainer>
                    <CloseToggleBtn onClick={showSearch}>Close</CloseToggleBtn>
                    <Form onSubmit={Searchitem}>
                        <Input type="text" name="location" required/>
                        <button className="submit_button" type="submit">Search</button>
                    </Form>
                    <SubmitBtn type="button" onClick={fetchingWeather}>{cityTitle}</SubmitBtn>
                </FormContainer> : null
            }
            {
                actualWeatherDetails === undefined ?
                <Loading>Loading ...</Loading> :
                <ActualWeatherDetails>
                    <WeatherImage src={`https://www.metaweather.com//static/img/weather/${actualWeatherDetails.weather_state_abbr}.svg`}/>
                    <WeatherName>{actualWeatherDetails.weather_state_name}</WeatherName>
                    <WeatherDate>{actualWeatherDetails.applicable_date}</WeatherDate>
                    <CityTitle>{cityTitle}</CityTitle>
                </ActualWeatherDetails>
            }
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