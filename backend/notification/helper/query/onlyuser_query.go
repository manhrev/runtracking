package query

type onlyUserQuery struct {
}

func OnlyUserQuery() Query {
	return &onlyUserQuery{}
}

func (q *onlyUserQuery) GetAllUsers() {

}
