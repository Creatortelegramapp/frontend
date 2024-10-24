"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";
import Offcanvas from "./common/Offcanvas";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Wrapper from "@/layouts/Wrapper";
import { useInitData, useLaunchParams, type User } from '@telegram-apps/sdk-react';

const MainHome = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(!show);
	// const initDataRaw = useLaunchParams().initDataRaw;
	// const initData = useInitData();

	useEffect(() => {
		// console.log('initDataRaw -> ', initDataRaw);
		// console.log('initData -> ', initData);
	}, [])

	return (
		<Wrapper>
			<Home />
		</Wrapper>
	);
};

export default MainHome;
