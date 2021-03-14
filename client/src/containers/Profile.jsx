import React from 'react'
import { Container } from 'semantic-ui-react'
import { PostForm } from '../components/posts/PostForm'
import { Posts } from '../components/posts/Posts'
import { User } from '../components/profile/User'
import classes from '../css/profile.module.css'

export const Profile = () => {
    return (
      <Container fluid className="padding_10_20">
        <section className={classes.profile}>
          <section className={classes.profile_left}>
            <section className="profile_left_user">
              <User></User>
            </section>
            <section className="profile_left_createPost">
              <PostForm>
              </PostForm>
            </section>
          </section>
          <section className={classes.profile_right}>
              <Posts></Posts>
          </section>
        </section>
      </Container>
    );
}
