import { useState, useEffect } from "react";
import axios from "axios";

import Search from "./Search/Search";
import Items from "./Items/Items";

import styles from "./Index.module.css";

const Index = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setData([
      {
        id: "1",
        product: "Macbook Pro",
        manufacturer: "Apple",
        device_type: "Laptop",
        serial: "23456n234n5",
        condition: "Good condition",
        year: "2018",
      },
      {
        id: "2",
        product: "Macbook Pro",
        manufacturer: "Apple",
        device_type: "Laptop",
        serial: "23456n234n5",
        condition: "Good condition",
        year: "2018",
      },
      {
        id: "3",
        product: "Macbook Pro",
        manufacturer: "Apple",
        device_type: "Laptop",
        serial: "23456n234n5",
        condition: "Good condition",
        year: "2018",
      },
      {
        id: "4",
        product: "Macbook Pro",
        manufacturer: "Apple",
        device_type: "Laptop",
        serial: "23456n234n5",
        condition: "Good condition",
        year: "2018",
      },
      {
        id: "5",
        product: "Macbook Pro",
        manufacturer: "Apple",
        device_type: "Laptop",
        serial: "23456n234n5",
        condition: "Good condition",
        year: "2018",
      },
    ]);
  };

  return (
    <div className={styles["Index"]}>
      <Search></Search>
      <Items items={data}></Items>
    </div>
  );
};

export default Index;
