import {
    EditOutlined,
    DeleteOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined
} from "@mui/icons-material"
import { Box, Divider, Typography, InputBase, Buttons, IconButton, useMediaQuery } from "@mui/material"
import Dropzone from "react-dropzone"
import FlexBetween from "components/FlexBetween"
import UserImage from "components/UserImage"
import WidgetWrapper from "components/WidgetWrapper"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPosts } from "state"


const MyPostWidget = ({ picturePath }) => {
  return (
    <div>MyPostWidget</div>
  )
}

export default MyPostWidget