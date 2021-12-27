import React from 'react';
import {EllipsisOutlined} from "@ant-design/icons";
import {Button} from "antd";
import './TreeElement.css'
import '../../styles/antd-override.scss'

const TreeElement = ({title}) => {

    const openProperties = e => {
        e.stopPropagation();
    }


    return (
        <span className="title" style={{display: "block"}}>
            {title}
            <Button
                onClick={openProperties}
                className="hide"
                block
                type="text"
                htmlType="submit"
                size={"small"}
                style={{float: "right", textShadow: "none", verticalAlign: "middle", border: "none"}}
                icon={<EllipsisOutlined style={{verticalAlign: "middle"}} />}
            />
        </span>
    );
};

export default TreeElement;