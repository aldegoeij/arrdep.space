import * as React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestionCircle, faSatellite, faSpaceShuttle } from "@fortawesome/pro-regular-svg-icons"
import { APIDataElement } from "../libs/api"

export const PayloadIcon = ({
  payloadType,
}: {
  payloadType: APIDataElement["payloadType"]
}): React.ReactElement => {
  switch (payloadType) {
    case "satellite":
      return (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="PayloadIcon_tooltip">{payloadType?.toUpperCase()}</Tooltip>}
        >
          <FontAwesomeIcon id="PayloadIcon_icon" icon={faSatellite} />
        </OverlayTrigger>
      )
    case "spaceship":
      return (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="PayloadIcon_tooltip">{payloadType?.toUpperCase()}</Tooltip>}
        >
          <FontAwesomeIcon id="PayloadIcon_icon" icon={faSpaceShuttle} />
        </OverlayTrigger>
      )
    default:
      return <FontAwesomeIcon id="PayloadIcon_icon" icon={faQuestionCircle} />
  }
}
