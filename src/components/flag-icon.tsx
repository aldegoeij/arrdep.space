import * as React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

export const FlagIcon = ({ countryCode }: { countryCode: string }): React.ReactElement | null => {
  if (countryCode) {
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="FlagIcon_tooltip">{countryCode?.toUpperCase() || "missing"}</Tooltip>}
      >
        <span id="FlagIcon_icon" className={`flag-icon flag-icon-${countryCode?.toLowerCase()}`} />
      </OverlayTrigger>
    )
  }
  return null
}
