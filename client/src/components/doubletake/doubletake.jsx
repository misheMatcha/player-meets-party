import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	calculateAge,
	displayAttribute,
	anyTrueValues
} from '../../util/general_util'
import ProfileAttributes from '../profile/profile_attributes'
// import faker from 'faker';

const Doubletake = props => {
	const [listIdx, setListIdx] = useState(0)
	const user = props.users ? props.users[listIdx] : ''
	const testPhoto =
		'https://chillabit-pro.s3-us-west-1.amazonaws.com/placeholder_data/users/ocha.jpg'
	const match = '87%'
	const location = 'Mountain View, CA'
	const basic = !user
		? ''
		: {
				orientation: user.orientation,
				gender: user.gender,
				relationship_status: user.relationship_status,
				relationship_type: user.relationship_type,
				icon: 'fas fa-cubes'
		  }
	const pronouns = !user
		? ''
		: {
				pronouns: user.pronouns,
				icon: 'fas fa-bullhorn'
		  }
	const looks = !user
		? ''
		: {
				height: user.height,
				body_type: user.body_type,
				icon: 'fas fa-seedling'
		  }
	const background = !user
		? ''
		: {
				ethnicity: user.ethnicity,
				languages: user.languages,
				fluency: user.fluency,
				politics: user.politics,
				education: user.education,
				occupation: user.occupation,
				employer: user.employer,
				religion: user.religion,
				religion_weight: user.religion_weight,
				sign: user.sign,
				icon: 'fas fa-globe'
		  }
	const lifestyle = !user
		? ''
		: {
				smoking: user.smoking,
				drinks: user.drinks,
				marijuana: user.marijuana,
				diet: user.diet,
				icon: 'fas fa-glass-martini'
		  }
	const family = !user
		? ''
		: {
				children: user.children,
				wants_children: user.wants_children,
				pets: user.pets,
				icon: 'fas fa-home'
		  }
	const attributeArray = [
		basic,
		pronouns,
		looks,
		background,
		lifestyle,
		family
	]
	const attributeSection = [
		'Basics',
		'Pronouns',
		'Looks',
		'Background',
		'Lifestyle',
		'Family'
	]
	const liked = !props.curUser ? '' : props.curUser.liked
	const passed = !props.curUser ? '' : props.curUser.passed

	useEffect(() => {
		if (!props.users) props.fetchUsers()
		if (user._id === localStorage.currentId) setListIdx(listIdx + 1)
		if (!props.curUser || props.curUser._id !== localStorage.currentId)
			props.fetchCurrentUser(localStorage.currentId)
		return () => {}
	}, [props, user._id, listIdx])

	const matchlistUserComponent = (match, activeMatchId, idx) => {
		let matchlistStyle = 'doubletake-matchlist-default'
		let whichIcon = 'none'
		let iconStyle = ''

		if (match._id !== localStorage.currentId) {
			if (match._id === user._id) {
				matchlistStyle = 'doubletake-matchlist-active'
			}
			if (liked.indexOf(match._id) > -1) {
				matchlistStyle = 'doubletake-matchlist-liked'
				whichIcon = 'liked'
				iconStyle = 'fas fa-heart'
			}
			if (passed.indexOf(match._id) > -1) {
				matchlistStyle = 'doubletake-matchlist-passed'
				whichIcon = 'passed'
				iconStyle = 'fas fa-times'
			}

			return (
				<div key={idx} className='doubletake-matchlist-img-wrap'>
					<img
						className='doubletake-matchlist-img'
						key={match._id}
						src={match.ph_photos[0]}
						alt={match.name}
					/>
					<div
						className={`doubletake-matchlist-img-overlay ${matchlistStyle}`}
					>
						{whichIcon === 'none' ? (
							''
						) : whichIcon === 'liked' ? (
							<i className={iconStyle} />
						) : (
							<p>X</p>
						)}
					</div>
				</div>
			)
		}

		return ''
	}

	return (
		<div className='doubletake-container'>
			<div className='doubletake-bg'>
				<div className='doubletake-bg-header' />
			</div>
			<div className='doubletake-content'>
				<div className='doubletake'>
					<div className='doubletake-header'>
						<div className='doubletake-matchlist-wrap'>
							<div className='doubletake-undo'>
								<button
									type='button'
									className='fas fa-undo-alt'
								/>
							</div>
							<div className='doubletake-matchlist'>
								{!props.users
									? ''
									: props.users.map((matched, idx) => {
											return matchlistUserComponent(
												matched,
												user._id,
												idx
											)
									  })}
							</div>
						</div>
					</div>
					<div className='doubletake-preview'>
						<div className='doubletake-preview-info'>
							<div className='doubletake-preview-info-wrap'>
								<div className='doubletake-preview-info-asl'>
									<p className='doubletake-preview-info-asl-name'>
										{user.name}
									</p>
									<div className='doubletake-preview-info-asl-details'>
										<p>{`${calculateAge(
											user.birthday
										)}`}</p>
										<p className='doubletake-preview-info-asl-details-spacer'>
											•
										</p>
										<p>{location}</p>
										<p className='doubletake-preview-info-asl-details-spacer'>
											•
										</p>
										<p>{match} Match</p>
										<Link to={`/profile/${user._id}`}>
											View Profile{' '}
											<i className='fas fa-chevron-right' />
										</Link>
									</div>
								</div>
							</div>
							<div className='doubletake-preview-info-buttons'>
								<button
									className='doubletake-preview-pass'
									onClick={() => {
										passed.push(user._id)
										setListIdx(listIdx + 1)
									}}
								>
									X PASS
								</button>
								<button
									className='doubletake-preview-like'
									onClick={() => {
										liked.push(user._id)
										setListIdx(listIdx + 1)
									}}
								>
									<i className='fas fa-heart' />
									LIKE
								</button>
							</div>
						</div>
						<div className='doubletake-gallery-wrap'>
							<div className='doubletake-gallery'>
								{!user
									? ''
									: user.ph_photos.map((imgLink, idx) => {
											return (
												<img
													key={idx}
													src={imgLink}
													alt={user.name}
												/>
											)
									  })}
							</div>
						</div>
						<div className='doubletake-preview-footer-wrap'>
							<p>If you like each other, we’ll let you know!</p>
							<div className='doubletake-preview-footer'>
								<button className='doubletake-preview-footer-selected' />
								<button className='doubletake-preview-footer-notselected' />
							</div>
						</div>
					</div>
					<div className='doubletake-match-profile-content'>
						<div className='doubletake-match-profile-essay'>
							{!user ? (
								'loading...'
							) : (
								<>
									{user.profile_essay_answers.map(
										(answer, idx) => {
											if (answer) {
												return (
													<div
														key={idx}
														className='doubletake-match-profile-essay-wrap'
													>
														<p className='doubletake-match-profile-essay-title'>
															{
																user
																	.profile_essay_questions[
																	idx
																]
															}
														</p>
														<p>{answer}</p>
													</div>
												)
											}
											return ''
										}
									)}
								</>
							)}
						</div>
						<div className='doubletake-match-profile-attributes'>
							{attributeArray.map((attObj, idx) => {
								return !displayAttribute(
									attObj,
									anyTrueValues
								) ? (
									''
								) : (
									<ProfileAttributes
										key={idx}
										userOrMatch={'match'}
										section={attributeSection[idx]}
										attributes={attObj}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Doubletake
