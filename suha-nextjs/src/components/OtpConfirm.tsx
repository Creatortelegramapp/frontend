import React from "react";

const OtpConfirm = () => {
	return (
		<>
			<div className="login-wrapper d-flex align-items-center justify-content-center text-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 col-lg-8">
							<div className="text-start rtl-text-right">
								<h5 className="mb-1 text-white">Verify Phone Number</h5>
								<p className="mb-4 text-white">
									Enter the OTP code sent to
									<span className="mx-1">0123 456 7890</span>
								</p>
							</div>

							<div className="otp-verify-form mt-5">
								<form action="/home" method="">
									<div className="d-flex justify-content-between mb-5 rtl-flex-d-row-r">
										<input
											className="single-otp-input form-control"
											type="text"
											value=""
											placeholder="-"
											maxLength={1}
										/>
										<input
											className="single-otp-input form-control"
											type="text"
											value=""
											placeholder="-"
											maxLength={1}
										/>
										<input
											className="single-otp-input form-control"
											type="text"
											value=""
											placeholder="-"
											maxLength={1}
										/>
										<input
											className="single-otp-input form-control"
											type="text"
											value=""
											placeholder="-"
											maxLength={1}
										/>
									</div>
									<button
										className="btn btn-warning btn-lg w-100"
										type="submit"
									>
										Verify & Proceed
									</button>
								</form>
							</div>

							<div className="login-meta-data">
								<p className="mt-3 mb-0">
									Dont received the OTP?
									<span
										className="otp-sec mx-1 text-white"
										id="resendOTP"
									></span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OtpConfirm;
