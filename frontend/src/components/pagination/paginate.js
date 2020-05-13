import React from "react";

export default function Paginate() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pg-blue">
        <li className="page-item ">
          <a className="page-link" tabindex="-1">
            Previous
          </a>
        </li>
        <li className="page-item" style={{paddingLeft:10,paddingRight:10}}>
          <a className="page-link">1</a>
        </li>

        <li className="page-item active">
          <a className="page-link">
            2 <span className="sr-only">(current)</span>
          </a>
        </li>

        <li className="page-item">
          <a className="page-link">3</a>
        </li>

        <li className="page-item ">
          <a className="page-link">Next</a>
        </li>

      </ul>
    </nav>
  );
}
