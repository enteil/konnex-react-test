import config from "../config/config";
import { NavBar } from "../components/navbar/navbar";
import { Table } from "../components/general/table/table";
import { TextInput } from "../components/general/inputs/text-input";
import { PrimaryButton } from "../components/general/buttons/primary-button";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { success, error } from "@pnotify/core";
export const Search = () => {
  const stateAuth = useSelector((state: any) => state.user);
  const listPlaces = async () => {
    const body = { data: { city: searchInput } };
    const headers = {
      headers: {
        Authorization: `Bearer ${stateAuth.token}`,
      },
    };
    await axios
      .post(`${config.baseUrl}search/listPlaces`, body, headers)
      .then((result) => {
        success({ title: "OK", text: result.data.message });
        setSearchResult({
          headers: result.data.data.headers,
          data: result.data.data.data,
        });
        listRecords();
      })
      .catch((err) => {
        error({ title: "Error", text: err.response.data.message });
      });
  };
  const listPlacesByCC = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const body = {
        data: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      };
      const headers = {
        headers: {
          Authorization: `Bearer ${stateAuth.token}`,
        },
      };
      await axios
        .post(`${config.baseUrl}search/listPlacesCC`, body, headers)
        .then((result) => {
          success({ title: "OK", text: result.data.message });
          setSearchResult({
            headers: result.data.data.headers,
            data: result.data.data.data,
          });
          listRecords();
        })
        .catch((err) => {
          error({ title: "Error", text: err.response.data.message });
        });
    });
  };
  const listRecords = async () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${stateAuth.token}`,
      },
    };
    await axios
      .post(`${config.baseUrl}search/listRecords`, {}, headers)
      .then((result) => {
        setSearchHistory({
          headers: result.data.data.headers,
          data: result.data.data.data,
        });
      })
      .catch((err) => {});
  };

  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState({
    headers: [],
    data: [],
  });
  const [searchHistory, setSearchHistory] = useState({
    headers: [],
    data: [],
  });

  const renderNavBar = () => {
    return <NavBar />;
  };
  const renderTextInputSearch = () => {
    return (
      <TextInput
        value={searchInput}
        label={"Buscar por nombre de ciudad"}
        placeholder={"...pereira?"}
        onChange={(e: any) => setSearchInput(e.target.value)}
      />
    );
  };
  const renderPrimaryButtonSearch = () => {
    return (
      <PrimaryButton
        name={"Buscar por ciudad"}
        type={"button"}
        onClick={() => listPlaces()}
      />
    );
  };
  const renderPrimaryButtonCoodinates = () => {
    return (
      <PrimaryButton
        name={"Buscar por coordenadas"}
        type={"button"}
        onClick={() => listPlacesByCC()}
      />
    );
  };
  const renderTableSearch = () => {
    return <Table headers={searchResult.headers} data={searchResult.data} />;
  };
  const renderTableHistory = () => {
    return <Table headers={searchHistory.headers} data={searchHistory.data} />;
  };

  return (
    <>
      <div>{renderNavBar()}</div>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-3">
          <div className="grid grid-cols-3 ">
            <div className="col-span-2 grid grid-cols-2">
              {renderTextInputSearch()} {renderPrimaryButtonSearch()}
            </div>
            {renderPrimaryButtonCoodinates()}
          </div>
          <div>{renderTableSearch()}</div>
        </div>
        <div>
          <div>
            <p>Historial</p>
          </div>
          {renderTableHistory()}
        </div>
      </div>
    </>
  );
};
