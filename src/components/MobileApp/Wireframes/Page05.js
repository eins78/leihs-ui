import React from 'react'

export default function Page02() {
  return <div>
    <h3 className="text-center text-uppercase">Katalog filtern</h3>
    <ul>
      <li>
        <h4>Stichwort v</h4>
        <ul>
          <li>Mikrofon x</li>
        </ul>
      </li>
      <li>
        <h4>Verfügbarkeit v</h4>
        <ul>
          <li>Von unbestimmt</li>
          <li>Bis unbestimmt</li>
        </ul>
      </li>
      <li>
        <h4>Geräteparks v</h4>
        <ul>
          <li>Ausleihe  Toni-Areal</li>
          <li>Gerätepark hinzufügen</li>
        </ul>
      </li>
      <li>
        <h4>Delegation v</h4>
        <ul>
          <li>Joël Gähwiler (persönlich)</li>
        </ul>
      </li>
    </ul>
    <div>
      <button type="button" className="btn btn-secondary">Zurücksetzen</button>
      <button type="button" className="btn btn-primary">Auswählen</button>
    </div>
  </div>
}