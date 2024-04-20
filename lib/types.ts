import { IconType } from "react-icons/lib";

interface SpreadSheet {
  name: string,
  Icon: IconType,
  URL : string
}
export interface SpreadSheets {
  data: SpreadSheet[]
}

