import React from "react";

const Otp = () => {
	return (
		<>
			<div className="login-wrapper d-flex align-items-center justify-content-center text-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 col-lg-8">
							<div className="text-start rtl-text-right">
								<h5 className="mb-1 text-white">Phone Verification</h5>
								<p className="mb-4 text-white">
									We will send you an OTP on this phone number.
								</p>
							</div>

							<div className="otp-form mt-5">
								<form action="/otp-confirm" method="">
									<div className="mb-4 d-flex rtl-flex-d-row-r">
										<select
											id="countryCodeSelect"
											name=""
											aria-label="Default select example"
										>
											<option value="">+880</option>
											<option value="">+62</option>
											<option value="">+60</option>
											<option value="">+91</option>
											<option value="">+198</option>
										</select>
										<input
											className="form-control ps-0"
											id="phone_number"
											type="text"
											placeholder="Enter phone number"
										/>
									</div>
									<button
										className="btn btn-warning btn-lg w-100"
										type="submit"
									>
										Send OTP
									</button>
								</form>
							</div>

							<div className="login-meta-data">
								<p className="mt-3 mb-0">
									By providing my phone number, I hereby agree the
									<a className="mx-1" href="#">
										Term of Services
									</a>
									and
									<a className="mx-1" href="#">
										Privacy Policy.
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Otp;
