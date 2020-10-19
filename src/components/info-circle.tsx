import * as React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/pro-regular-svg-icons"

export const InfoCircle = ({ tip }: { tip: string }): React.ReactElement => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="InfoCircle_tooltip">{tip?.toUpperCase()}</Tooltip>}
    >
      <FontAwesomeIcon id="InfoCircle_icon" icon={faInfoCircle} />
    </OverlayTrigger>
  )
}
