import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">armanmoatasim</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/292231888_578274930491792_2702368483221974972_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF2_8RQA5QObKA9BTEdgxK9EdN3UPPe7ZQR03dQ897tlHiQgn1fN2iJwTLGGL-sHp9Zrv9Nr22QC-AwbRzwgCnX&_nc_ohc=p4g91RNsGw4AX9V6DTA&_nc_ht=scontent.fdac31-1.fna&oh=00_AT80Sm7DIsT0U_oPibtW92p6Jdy93P5D9HJTzOWmfcfPDQ&oe=62DFCCC8" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
