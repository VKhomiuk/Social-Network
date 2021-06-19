import React from "react";
import s from './Users.module.css'


const Users = (props) => {
    console.log(props.users)
    return (
        <div className={s.users}>
            {
                props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img alt='' src={u.photoUrl}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        props.unFollow(u.id)
                                    }}>Unfollow</button>}
                            </div>
                        </span>
                        <span>
                            <div>{u.fName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </div>
                )
            }
        </div>
    )
}
export default Users