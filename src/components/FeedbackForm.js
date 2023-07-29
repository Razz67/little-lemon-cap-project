import { useState } from "react";
import "../index.css";

function FeedbackForm({ onSubmit }) {
	const [score, setScore] = useState("10");
	const [comment, setComment] = useState("");

	const isDisabled = Number(score) < 5 && comment.length <= 10;

	const textAreaPlaceholder = isDisabled
		? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
		: "Optional feedback";

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ score, comment });
	};

        // setComment("");
        // setScore("10");

	return (
		<div className=" mx-auto bg-gray shadow-md p-4 m-8 md:w-[800px] md:text-[28px]">
			<form onSubmit={handleSubmit}>
				<fieldset className="flex flex-col">
					<h2 className="mx-auto text-3xl md:text-5xl">Feedback form</h2>
					<div className="flex flex-col pt-[16px] md:text-3xl">
						<label htmlFor="score" className=" text-2xl md:text-4xl">
							Score: {score} ⭐
						</label>
						<input
							id="score"
							value={score}
							onChange={(e) => {
								setScore(e.target.value);
							}}
							type="range"
							min="0"
							max="10"
						/>
					</div>
					<div className="flex flex-col pt-[16px]">
						<label className="text-2xl md:text-4xl" htmlFor="comment">
							Comments:
						</label>
						<textarea
							className="h-[100px] p-2"
							id="comment"
							placeholder={textAreaPlaceholder}
							name="comment"
							value={comment}
							onChange={(e) => {
								setComment(e.target.value);
							}}
						/>
					</div>
					<button
						className="bg-lemon rounded-lg p-2 text-olive mt-2 hover:scale-105 mx-auto text-2xl md:w-[200px] md:mt-4 md:text-4xl"
						type="submit"
						disabled={isDisabled}
					>
						Submit
					</button>
				</fieldset>
			</form>
		</div>
	);
}

export default FeedbackForm;
