import { useState } from "react";

/*
  Submissions go to Netlify Forms. The form is registered by the hidden copy in
  index.html — keep the name and the field list below in sync with it. Read the
  submissions under Site configuration > Forms in the Netlify dashboard, where
  email notifications can also be turned on.
*/
const FORM_NAME = "contact";

const EMAIL_ADDRESS = "muhammad.khizar.waqar@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = { name: "", phone: "", email: "", subject: "", message: "" };

const CONTACT_DETAILS = [
	{
		icon: "ri-phone-fill",
		label: "Phone Number",
		value: "+923075245261",
		href: "tel:+923075245261",
	},
	{
		icon: "ri-mail-fill",
		label: "Email",
		value: EMAIL_ADDRESS,
		href: `mailto:${EMAIL_ADDRESS}`,
		wrap: true,
	},
	{
		icon: "ri-github-fill",
		label: "GitHub",
		value: "Muhammad-Khizar-Waqar",
		href: "https://github.com/Muhammad-Khizar-Waqar",
		external: true,
	},
	{
		icon: "ri-telegram-fill",
		label: "Telegram",
		value: "@khizar01",
		href: "https://t.me/khizar01",
		external: true,
	},
	{
		icon: "ri-map-2-fill",
		label: "Location",
		value: "Lahore, Punjab, Pakistan",
		href: "https://maps.google.com/maps?q=Lahore,Pakistan",
		external: true,
	},
];

function validate(values) {
	const errors = {};
	if (!values.name.trim()) errors.name = "Please enter your name.";
	if (!values.email.trim()) {
		errors.email = "Please enter your email.";
	} else if (!EMAIL_PATTERN.test(values.email.trim())) {
		errors.email = "Please enter a valid email address.";
	}
	if (!values.message.trim()) errors.message = "Please enter a message.";
	return errors;
}

export default function Contact() {
	const [values, setValues] = useState(EMPTY_FORM);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState("idle"); // idle | sending | success | error
	// Netlify's honeypot: real people never see this, bots fill it in.
	const [botField, setBotField] = useState("");

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues((prev) => ({ ...prev, [name]: value }));
		// Clear a field's error as soon as the visitor starts fixing it.
		setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
		if (status !== "idle") setStatus("idle");
	};

	const sendByMailClient = () => {
		const subject = values.subject.trim() || `Portfolio enquiry from ${values.name.trim()}`;
		const body = [
			`Name: ${values.name.trim()}`,
			values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
			`Email: ${values.email.trim()}`,
			"",
			values.message.trim(),
		]
			.filter(Boolean)
			.join("\n");

		window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
	};

	const submitToNetlify = async () => {
		const body = new URLSearchParams({
			"form-name": FORM_NAME,
			"bot-field": botField,
			...values,
		});
		const response = await fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: body.toString(),
		});
		if (!response.ok) throw new Error(`Netlify returned ${response.status}`);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const nextErrors = validate(values);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) {
			setStatus("idle");
			return;
		}

		setStatus("sending");
		try {
			if (import.meta.env.DEV) {
				// Netlify's form handler only exists on the deployed site, so in
				// local dev fall back to the visitor's mail client.
				sendByMailClient();
			} else {
				await submitToNetlify();
			}
			setStatus("success");
			setValues(EMPTY_FORM);
			setBotField("");
		} catch {
			setStatus("error");
		}
	};

	const fieldClass = (field) =>
		`form-control bg-3 border border-1 rounded-3${errors[field] ? " field-invalid" : ""}`;

	return (
		<>

			<section id="contact" className="section-contact-2 position-relative overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-primary-2 mb-3">Let’s connect</h3>
									<form
										name={FORM_NAME}
										method="POST"
										data-netlify="true"
										netlify-honeypot="bot-field"
										onSubmit={handleSubmit}
										noValidate
									>
										<input type="hidden" name="form-name" value={FORM_NAME} />
										{/* Honeypot — hidden from people, irresistible to bots. */}
										<p className="d-none">
											<label>
												Don’t fill this out if you’re human:
												<input
													name="bot-field"
													value={botField}
													onChange={(event) => setBotField(event.target.value)}
													tabIndex={-1}
													autoComplete="off"
												/>
											</label>
										</p>
										<div className="row g-3">
											<div className="col-md-6">
												<label className="visually-hidden" htmlFor="name">Your name</label>
												<input
													type="text"
													className={fieldClass("name")}
													id="name"
													name="name"
													placeholder="Your name"
													value={values.name}
													onChange={handleChange}
													aria-invalid={Boolean(errors.name)}
													aria-describedby={errors.name ? "name-error" : undefined}
												/>
												{errors.name && (
													<p id="name-error" className="field-error mb-0 mt-1">{errors.name}</p>
												)}
											</div>
											<div className="col-md-6">
												<label className="visually-hidden" htmlFor="phone">Phone</label>
												<input
													type="tel"
													className={fieldClass("phone")}
													id="phone"
													name="phone"
													placeholder="Phone (optional)"
													value={values.phone}
													onChange={handleChange}
												/>
											</div>
											<div className="col-md-6">
												<label className="visually-hidden" htmlFor="email">Email</label>
												<input
													type="email"
													className={fieldClass("email")}
													id="email"
													name="email"
													placeholder="Email"
													value={values.email}
													onChange={handleChange}
													aria-invalid={Boolean(errors.email)}
													aria-describedby={errors.email ? "email-error" : undefined}
												/>
												{errors.email && (
													<p id="email-error" className="field-error mb-0 mt-1">{errors.email}</p>
												)}
											</div>
											<div className="col-md-6">
												<label className="visually-hidden" htmlFor="subject">Subject</label>
												<input
													type="text"
													className={fieldClass("subject")}
													id="subject"
													name="subject"
													placeholder="Subject (optional)"
													value={values.subject}
													onChange={handleChange}
												/>
											</div>
											<div className="col-12">
												<label className="visually-hidden" htmlFor="message">Message</label>
												<textarea
													className={fieldClass("message")}
													id="message"
													name="message"
													rows={5}
													placeholder="Message"
													value={values.message}
													onChange={handleChange}
													aria-invalid={Boolean(errors.message)}
													aria-describedby={errors.message ? "message-error" : undefined}
												/>
												{errors.message && (
													<p id="message-error" className="field-error mb-0 mt-1">{errors.message}</p>
												)}
											</div>
											<div className="col-12">
												<button
													type="submit"
													className="btn btn-primary-2 rounded-2"
													disabled={status === "sending"}
												>
													{status === "sending" ? "Sending..." : "Send Message"}
													<i className="ri-arrow-right-up-line" />
												</button>
											</div>
											<div className="col-12" aria-live="polite">
												{status === "success" && (
													<p className="form-status form-status-ok mb-0">
														Thanks — your message is on its way. I’ll get back to you soon.
													</p>
												)}
												{status === "error" && (
													<p className="form-status form-status-fail mb-0">
														Something went wrong. Please email me directly at{" "}
														<a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>.
													</p>
												)}
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							{CONTACT_DETAILS.map((item) => (
								<div key={item.label} className="d-flex align-items-center mb-3 position-relative d-inline-flex">
									<div className="d-inline-block">
										<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
											<i className={`${item.icon} text-primary-2 fs-26`} />
										</div>
									</div>
									<div className="ps-3 h-100">
										<span className="text-400 fs-6">{item.label}</span>
										<h6 className={`mb-0${item.wrap ? " break-all" : ""}`}>{item.value}</h6>
									</div>
									<a
										href={item.href}
										aria-label={`${item.label}: ${item.value}`}
										{...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
										className="position-absolute top-0 start-0 w-100 h-100"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
