package expopush

type ExpoPush interface {
	PushBulkNotification()
}

type expoPush struct {
}
