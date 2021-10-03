import { ActionType } from "./types";
import { BData} from "@/types"

interface BlogDataAction {
    type: ActionType.BLOG_DATA,
    payload: BData
} 

interface DataLoadedAction {
    type: ActionType.DATA_LOADED,
    payload: boolean
}


export type Action =  BlogDataAction | DataLoadedAction;