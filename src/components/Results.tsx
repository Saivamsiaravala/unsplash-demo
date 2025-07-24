import { useEffect, useState } from "react";
import Images from "./Images";
import Pagination from "./Pagination";

const apiKey = import.meta.env.VITE_APP_ACCESS_KEY;

const Results = ({ query }: { query: string }) => {
  const [results, setResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const dummyArray: number[] = [];
    async function fetchResults() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=30&page=1&client_id=${apiKey}`
        );
        const data = await response.json();
        setResults(data.results);
        //log statement
        // console.log(data.results);
        for (let i = 1; i <= Math.ceil(data.results.length / 6); i++) {
          dummyArray.push(i);
        }
        setPages(dummyArray);

        //log statement
        //console.log("Fetched results:", data);
      } catch (error) {
        console.log("Error fetching results:", error);
      }
    }
    fetchResults();
  }, [query]);

  return (
    <div className="results">
      Results for {query}
      {results && (
        <>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
          <Images results={results} currentPage={currentPage} />
        </>
      )}
    </div>
  );
};

export default Results;
