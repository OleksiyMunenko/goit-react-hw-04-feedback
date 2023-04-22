import { useState } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const options = Object.keys({ good, neutral, bad });

	const onLeaveFeedback = (e) => {
		const feedback = e;
		switch (feedback) {
			 case 'good':
				  setGood((prevState) => prevState + 1)
				  break;
			 case 'neutral':
				  setNeutral((prevState) => prevState + 1)
				  break;
			 case 'bad':
				  setBad((prevState) => prevState + 1)
				  break;
			 default:
				  break;
		}
  };

	const countTotalFeedback =  () => {
		let total = good + neutral + bad;
		return total;
	};

	const countPositiveFeedbackPercentage = (total) => {
		let positiveFeedbackPercentage = Math.round((good / total) * 100);
		return positiveFeedbackPercentage;
	};

	return (
		<div className="statistics">
			<Section title="Please leave feedback">
				<FeedbackOptions 
				options={options} 
				onLeaveFeedback={onLeaveFeedback}/>
			</Section>			

			<Section title="Statictics">
				{ (good || neutral || bad > 0) ?
					<Statistics 
					good={good}
					neutral={neutral}
					bad={bad}
					total={countTotalFeedback()}
					positivePercentage={countPositiveFeedbackPercentage(countTotalFeedback())}/>	: 

					<Notification message="There is no feedback"/>

				}
				
			</Section>	
		</div>
	)
}

export { App };
