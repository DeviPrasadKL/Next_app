"use client"
import React, { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [apiData, setapiData] = useState(null);
    let [pending, setpending] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok === false) {
                    throw Error("Searching data not found")
                }
                return response.json()
            })
            .then((datas) => { setapiData(datas.data); setpending(false) })
            .catch((err) => { setError(err.message) })
    }, []);
  return [apiData, pending, error];
}
