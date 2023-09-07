import React from 'react'
import BuildingMap from '../components/BuildingMap/BuildingMap'
import SettingBuildingMap from '../components/BuildingMap/SettingBuildingMap'

const BuildingChecker = () => {

  return (
    <>
      {localStorage.settingBuilding ?
        <BuildingMap />
        :
        <SettingBuildingMap />
      }
    </>
  )
}

export default BuildingChecker