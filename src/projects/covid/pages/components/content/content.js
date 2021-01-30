import React from "react";
import "./content.css";
export default function ContentCovid({ title, cases, total, active, icon }) {
  return (
    <div className="recolumn">
      <p className='resulttitle'>{title}</p><div>{icon}</div>
      <p>{cases}</p>
      <p className='resulttotal'>{total}</p>
      <p className='resulttot'>TOTAL</p>
    </div>
  );
}
