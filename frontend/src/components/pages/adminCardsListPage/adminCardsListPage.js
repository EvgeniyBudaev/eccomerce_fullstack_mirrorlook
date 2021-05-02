import React from "react"
import {RouteComponentProps, withRouter} from "react-router"
import AdminCardsList from "../../adminCardsList"

const AdminCardsListPage = (props) => {
    const {category_slug} = props.match.params

    return (
        <div>
            <AdminCardsList category_slug={category_slug} />
        </div>
    )
}

export default withRouter(AdminCardsListPage)