import React from 'react';
import queryString from 'query-string';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

export default function PaginationBar({ location, pages, itemLimit }) {
  let activeItem = 1;
  const queryObj = queryString.parse(location.search);
  if (queryObj.page > 0) { activeItem = parseInt(queryObj.page) };

  // set an array of total indexed items in the pagination bar, from 1 to the total pages in the query.
  const arrayOfItems = [];
  for (let i = 0; i < pages; i++) {
    arrayOfItems.push(i + 1);
  }

  // number of stages
  const currStage = Math.ceil(activeItem/itemLimit);

  const lastItem = currStage * itemLimit;
  const firstItem = lastItem - itemLimit;
  let currItems = 0;
  if (pages <= lastItem) {
    currItems = arrayOfItems.slice(firstItem, pages);
  } else {
    currItems = arrayOfItems.slice(firstItem, lastItem);
  }

  return <>
    <div className="row mt-4">
      <div className="col d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {activeItem === 1 
              ? 
                <li className="page-item disabled">
                  <Link 
                    className="page-link a-pagination-cs" 
                    to="#" 
                    aria-label="Previous"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </Link>
                </li>
              :
                <li className="page-item">
                  <Link 
                    className="page-link a-pagination-cs" 
                    to={queryString.stringifyUrl({url: location.pathname, query: {...queryObj, page: activeItem - 1}})} 
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </Link>
                </li>
            }
            
            {currItems.map(item =>
              <li key={uuid()} className={`page-item ${item === activeItem && "active"}`}>
                <Link className="page-link a-pagination-cs" to={queryString.stringifyUrl({url: location.pathname, query: {...queryObj, page: item}})}>{item}</Link>
              </li>
            )}
            
            {activeItem === pages 
              ?
                <li className="page-item disabled">
                  <Link 
                    className="page-link a-pagination-cs" 
                    to="#"
                    aria-label="Next"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </Link>
                </li>
              :
                <li className="page-item">
                  <Link 
                    className="page-link a-pagination-cs" 
                    to={queryString.stringifyUrl({url: location.pathname, query: {...queryObj, page: activeItem + 1}})} 
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </Link>
                </li>
            }
          </ul>
        </nav>
      </div>
    </div>
  </>
}