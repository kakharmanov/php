export default{
	getters:{
		validPost(state){
			return state.posts.filter(
				p => {
					return p.title && p.body
				}
			)
		},
		// allPosts(state){
		// 	return state.posts
		// },
		postsCount(state, getters){
			return getters.validPost.length
		}
	},
	state:{
		posts:[]
	},
	actions:{
		async fetchPosts({commit}, limit = 3){
			const res =  await fetch('https://jsonplaceholder.typicode.com/posts?_limit='+limit);
			const posts = await res.json();
			commit('InsertPosts', posts)
		}
	},
	mutations:{
		InsertPosts(state, posts){
			state.posts = posts
		},
		createPost(state,newPost){
			state.posts.unshift(newPost)
		}
	}
}