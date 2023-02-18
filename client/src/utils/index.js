import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
	const randomPrompt = surpriseMePrompts[randomIndex];

	// Check if get the same result as previous one
	if (randomPrompt === prompt) return getRandomPrompt(prompt);

	return randomPrompt;
}