import axios from 'axios';

export const fetchUsers = () => axios.get(`/api/users`);

export const fetchUser = user_id => axios.get(`/api/users/${user_id}`, user_id);

export const updateUser = user => axios.patch(`/api/users/${user._id}`, user);