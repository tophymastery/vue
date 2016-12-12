<template>
  <div class="ui basic segment">
    <div class="ui segment">
      <form class="ui form" @submit.prevent="post">
        <div class="field">
          <textarea v-model.trim="input">
        </div>
        <button class="ui blue button" :class="{ 'loading disabled': posting }">Post</button>
      </form>
    </div>
    <div v-for="tweet in tweets" class="ui segment">
      {{ tweet.content }} {{ tweet.timestamp | fromNow }}
    </div>
  </div>
</template>

<script>
import { Tweet } from '../services'

export default {
  data: () => ({
    input: '',
    posting: false,
    tweets: []
  }),
  created () {
    Tweet.list((list) => {
      this.tweets = list
    })
  },
  methods: {
    post () {
      if (!this.input) return
      this.posting = true
      Tweet.post(this.input)
        .then(() => {
          this.input = ''
          this.posting = false
        })
    }
  }
}
</script>
