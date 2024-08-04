"use client";

import Link from "next/link";
import React, { useState } from "react";
import Offcanvas from "./common/Offcanvas";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Wrapper from "@/layouts/Wrapper";

const MainHome = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(!show);

	return (
		<Wrapper>
			<Home />
		</Wrapper>
	);
};

export default MainHome;
