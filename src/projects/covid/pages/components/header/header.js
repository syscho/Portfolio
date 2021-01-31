import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import covidback from "../../../../../assets/img/Projects/covid/covidback.jpg";
import ContentCovid from "../content/content";
import "./header.css";
import numeral from "numeral";
import Tablecases from "../content/tablecases";
import { MdGames } from "react-icons/md";
import { MdSentimentSatisfied } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
export const CenteredContainer = styled.div`
  background-position: center;
  background-image: url(${covidback});
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  @media (max-width: 600px) {
    background-color: red;
  }
`;

export default function HeaderCovid() {
  const [country, setInputCountry] = useState("Global");
  const [countryDate, setcountryDate] = useState("Ultima actualización");
  const [casesType, setCasesType] = useState("cases");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);

  //get All data
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  //get country data
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
          setTableData(sortData(data));
        });
    };

    getCountriesData();
  }, []);
  //get actual country

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        setcountryDate(dateTimeUpdate(data));
      });
    if (countryCode === "global") {
      fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setCountryInfo(data);
          setcountryDate("Ultima actualización");
        });
    }
  };
  // var myDate = new Date(1612010225968);
  // console.log(myDate);
  // console.log(countryInfo);
  const prettyPrintStat = (stat) =>
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";
  const sortData = (data) => {
    let sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedData;
  };
  const dateTimeUpdate = (data) => {
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    const month = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let modTime = new Date(data.updated);
    const modTimeDaynum = modTime.getDate();
    const modTimeDay = days[modTime.getDay()];
    const modTimeYear = modTime.getFullYear();
    const modTimeMonth = month[modTime.getMonth()];
    const modTimeHours = modTime.getHours();
    const modTimeMin = modTime.getMinutes();

    console.log(modTimeDay);
    const finalDate =
      modTimeDay +
      " - " +
      modTimeDaynum +
      "/" +
      modTimeMonth +
      "/" +
      modTimeYear +
      " a Hrs." +
      modTimeHours +":"+
      modTimeMin;
    return finalDate;
  };
  return (
    <>
      <CenteredContainer>
        <div className="CenteredWrapper">
          <p className="title">
            COVID 19 <MdGames /> Tracker
          </p>
          <p className="subtitle">
            Informate de los casos en tu pais y en el mundo, cuidate.
          </p>
        </div>
        <div className="content">
          <div className="search">
            <p className="pcontent">{country}</p>
            <select onChange={onCountryChange} className="selectcontent">
              <option className="optiontitle" value="global">
                Global
              </option>
              {countries.map((country) => (
                <option
                  value={country.name}
                  key={country.name}
                  className="optiontitle"
                >
                  {country.name}
                </option>
              ))}
            </select>
            <p className="dateupdated">{countryDate}</p>
          </div>
          <div className="result">
            <ContentCovid
              onClick={(e) => setCasesType("cases")}
              cases={prettyPrintStat(countryInfo.todayCases)}
              title="Nuevos casos"
              active={casesType === "cases"}
              total={numeral(countryInfo.cases).format("0.0a")}
              icon={<MdGames size={32} color={"red"} />}
            />
            <ContentCovid
              onClick={(e) => setCasesType("recovered")}
              cases={prettyPrintStat(countryInfo.todayRecovered)}
              title="Recuperados"
              active={casesType === "recovered"}
              total={numeral(countryInfo.recovered).format("0.0a")}
              icon={<MdSentimentSatisfied size={32} color={"blue"} />}
            />
            <ContentCovid
              onClick={(e) => setCasesType("deaths")}
              cases={prettyPrintStat(countryInfo.todayDeaths)}
              title="Muertos"
              active={casesType === "deaths"}
              total={numeral(countryInfo.deaths).format("0.0a")}
              icon={<MdAccountBox size={32} color={"black"} />}
            />
          </div>
          <Tablecases valuetable={tableData} />
        </div>
        <div className="footer">
          <p className="footertext">
            COVID 19 <MdGames size={10} /> Tracker / Dev. By.{" "}
            <span style={{ color: "red" }}>SYSCHO</span>
          </p>
        </div>
      </CenteredContainer>
    </>
  );
}
