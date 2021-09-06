export default{
	actions:{
		async getPosts({commit}, limit = 3){
			const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit);
			const posts = await res.json();
			commit('updatePost', posts)
		}
	},
	mutations:{
		updatePost(state, posts){
			state.posts = posts
		},
		NewPosts(state, newPost){
			state.posts.unshift(newPost)
		}
	},
	state:{
		posts:[]
	},
	getters:{
		allPosts(state){
			return state.posts
		},
		postsCount(state){
			return state.allPosts.length
		}
	}
}