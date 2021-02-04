import * as React from "react"
import { Badge } from "react-bootstrap"

export const StatusBadge = ({
  status,
}: {
  status: "operational" | "unknown" | string
}): React.ReactElement => {
  let variant: string = "secondary"

  switch (status) {
    case "operational":
      variant = "success"
      break
    case "closed":
      variant = "danger"
      break
  }
  return <Badge variant={variant}>{status.toUpperCase()}</Badge>
}
