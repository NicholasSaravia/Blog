import React from 'react'
import { TextEditor } from '../components/Common/TextEditor'
import { User } from '../components/Profile/User'

export const Profile = () => {
    return (
        <section className="profile">
            <section className="profile_left">
                <section className="profile_left_user">
                    <User></User>
                </section>
                <section className="profile_left_createPost">
                    <TextEditor></TextEditor>
                </section>
            </section>
            <section className="profile_right">

            </section>
        </section>
    )
}
