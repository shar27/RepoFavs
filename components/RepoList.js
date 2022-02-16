import { useState, useEffect } from "react";
import Fade from "react-reveal";
import Link from "next/link";
import Image from "next/image";

export default function RepoList() {
  const [color, setColor] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchList = async () => {
      const newList = await fetch(
        "https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    };
    fetchList();
  }, [1000]);

  if (isLoading)
    return <p className="text-white text-3xl text-center">Loading...</p>;
  if (!data)
    return <p className="text-white text-3xl text-center">No profile data</p>;

  //need this to ensure new values don't erase what already exists
  const favs = JSON.parse(localStorage.getItem("name") || "[]");

  //add value to array and localstorage
  function addValue(e) {
    if (e.target.value !== "") {
      if (!favs.includes(e.target.value)) {
        favs.push(e.target.value);
        localStorage.setItem("name", JSON.stringify(favs));
        console.log(favs);
        document.getElementById("favsarray").innerHTML = favs;
      }
    }
  }

  //display localstorage

  function getItem() {
    const item = localStorage.getItem("name");
    return (document.getElementById("favsarray").innerHTML =
      JSON.stringify(item));
  }
  getItem();

  //remove from array and localstorage
  //Check if value is in the array, if it then remove the value from both the array and localstorage
  function removeValue(e, value) {
    if (e.target.value !== "") {
      //delete from array
      favs.pop(e.target.value);
      console.log(favs);
      //change the div text
      document.getElementById("favsarray").innerHTML = favs;
      //get the values from localstorage- parse
      const stored = JSON.parse(localStorage.getItem("name"));
      //delete the value
      delete stored[(value, e.target.value)];
      //store the new array as a string
      localStorage.setItem("name", JSON.stringify(favs));
      console.log(stored);
    }
  }

  //handle toggle , two functions - one button

  function addOrRemove(e) {
    const elem = e.currentTarget;
    setColor((color) => !color);
    if (color) {
      addValue(elem);
    } else {
      removeValue(elem);
    }
  }

  return (
    <div className="relative bg-opacity-95">
      <div className="absolute">
        <Image
          src="/images/background/bgimgone.jpg"
          className="object-cover"
          layout="fill"
        />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4  text-white  ">
          
          {data.items
            .sort(function (a, b) {
              return (
                new Date(b.created_at) - new Date(a.created_at) ||
                a.stargazers_count - b.stargazers_count
              );
            })
            .map((d) => (
              <Fade top>
                <div
                  key={d.id}
                  className=" transition duration-150 ease-in-out hover:transition-all border-2 border-gray-100 shadow hover:shadow-2xl  p-5 "
                >
                  <p>{d.avatar_url}</p>
                  <h1 className="text-4xl font-bold font-serif text-ellipsis overflow-hidden ">
                    Repo name: {d.name}{" "}
                  </h1>
                  <Image
                    src="/images/avatar/startup.png"
                    height={300}
                    width={300}
                  />
                  <p className="mb-5 text-lg mt-10">
                    Description: {d.description}
                  </p>

                  <p className="mt-10 text-lg">
                    Created on: {d.created_at.slice(0, 10)}
                  </p>
                  <p className="text-lg ">Stars: {d.stargazers_count} </p>
                  <button
                    id="btn"
                    onClick={addValue}
                    className=" transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700 duration-300 text-white font-bold rounded-lg p-4 text-lg"
                    value={
                      "- Name:  " +
                      d.name +
                      " - Description:   " +
                      d.description +
                      " - Stars:  ⭐⭐⭐⭐⭐ " +
                      d.stargazers_count +
                      " - URL:   " +
                      d.html_url
                    }
                  >
                    Favorite me{" "}
                  </button>

                  <br />
                  <br />
                  <button
                    id="btn"
                    onClick={removeValue}
                    className="bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 text-white text-lg p-4 font-bold rounded-lg"
                    value={
                      "Name:  " +
                      d.name +
                      "  Description:   " +
                      d.description +
                      "  Stars:  ⭐⭐⭐⭐⭐ " +
                      d.stargazers_count +
                      "  URL:   " +
                      d.html_url
                    }
                  >
                    unFavorite me{" "}
                  </button>
                  <br />
                  <br />
                  <Link href={d.html_url}>
                    <a className="transition p-2 text-white rounded-md ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 ">
                      Click me to see repo.
                    </a>
                  </Link>
                  <br />
                </div>
              </Fade>
            ))}
        </div>
      </div>
    </div>
  );
}
