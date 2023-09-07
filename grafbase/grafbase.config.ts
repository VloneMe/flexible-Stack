import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  avatar: g.url(),
  description: g.string().optional(),
  githuburl: g.url().optional(),
  linkedinurl: g.url().optional(),
  project: g.relation(() => Project).list().optional()
})

const Project = g.model("Project", {
  title: g.string().length({min: 2, max: 3}),
  description: g.string(),
  image: g.url(),
  livesiteurl: g.url(),
  githuburl: g.url().optional(),
  category: g.string().search(),
  createdby: g.relation(() => User),
})

export default config({
  schema: g
})
