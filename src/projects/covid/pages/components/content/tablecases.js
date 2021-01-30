import React from "react";
import numeral from "numeral";
import "./content.css";
export default function Tablecases({ valuetable }) {
  console.log(valuetable);
  return (
    <>
      <div className="tablecases">
        <table>
          <tbody>
            <tr>
              <td className="tabletitle">PAIS</td>
              <td className="tabletitle">TOTAL</td>
              <td className="tabletitle">ACTIVOS</td>
              <td className="tabletitle">MUERTOS</td>
            </tr>
            {valuetable.map((country) => (
              <tr key={country.country}>
                <td className="tablecountry">
                  <img
                    src={country.countryInfo.flag}
                    alt="Flag"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                  {country.country}
                </td>
                <td className="tablecountry2">
                  <strong>{numeral(country.cases).format("0,0")}</strong>
                </td>
                <td className="tablecountry2">{country.active}</td>
                <td className="tablecountry2">{country.deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
