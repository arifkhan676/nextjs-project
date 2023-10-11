import React, { Fragment } from "react";
import Link from "next/link";

const news = () => {
  return (
    <Fragment>
      <div>
        <ul>
          <li>
            <Link href="news/something-new">
              {" "}
              <h1> NextJS Routing</h1>{" "}
            </Link>
          </li>
          <li>
            <h1> This is News page </h1>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default news;
