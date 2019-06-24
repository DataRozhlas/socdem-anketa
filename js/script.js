import './byeie'; // loučíme se s IE
import { h, render } from "preact";
/** @jsx h */

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={'https://samizdat.blob.core.windows.net/storage/anketa-cssd/' + el.f} alt={el.p} />
          <div className="bio">
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="vek">{el.k} {el.s}</div>
          </div>
          <div className={el.o.length>0 ? 'odpoved' : 'odpoved cervene'}>{el.o.length>0 ? el.o : 'bez odpovědi'}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
};

const r = new XMLHttpRequest();
r.addEventListener("load", onLoad);
r.open("GET", "https://data.irozhlas.cz/socdem-anketa/data/data.json");
r.send();
