// Code generated by ent, DO NOT EDIT.

package ent

import (
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"entgo.io/ent/dialect/sql"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"

	entactivity "github.com/manhrev/runtracking/backend/activity/pkg/ent/activity"
)

// Activity is the model entity for the Activity schema.
type Activity struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// ActivityName holds the value of the "activity_name" field.
	ActivityName string `json:"activity_name,omitempty"`
	// ActivityNote holds the value of the "activity_note" field.
	ActivityNote string `json:"activity_note,omitempty"`
	// UserID holds the value of the "user_id" field.
	UserID int64 `json:"user_id,omitempty"`
	// Type holds the value of the "type" field.
	Type uint32 `json:"type,omitempty"`
	// TotalDistance holds the value of the "total_distance" field.
	TotalDistance float64 `json:"total_distance,omitempty"`
	// Kcal holds the value of the "kcal" field.
	Kcal float32 `json:"kcal,omitempty"`
	// StartTime holds the value of the "start_time" field.
	StartTime time.Time `json:"start_time,omitempty"`
	// EndTime holds the value of the "end_time" field.
	EndTime time.Time `json:"end_time,omitempty"`
	// Duration holds the value of the "duration" field.
	Duration uint64 `json:"duration,omitempty"`
	// Route holds the value of the "route" field.
	Route []*activity.TrackPoint `json:"route,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Activity) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case entactivity.FieldRoute:
			values[i] = new([]byte)
		case entactivity.FieldTotalDistance, entactivity.FieldKcal:
			values[i] = new(sql.NullFloat64)
		case entactivity.FieldID, entactivity.FieldUserID, entactivity.FieldType, entactivity.FieldDuration:
			values[i] = new(sql.NullInt64)
		case entactivity.FieldActivityName, entactivity.FieldActivityNote:
			values[i] = new(sql.NullString)
		case entactivity.FieldStartTime, entactivity.FieldEndTime, entactivity.FieldCreatedAt:
			values[i] = new(sql.NullTime)
		default:
			return nil, fmt.Errorf("unexpected column %q for type Activity", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Activity fields.
func (a *Activity) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case entactivity.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			a.ID = int64(value.Int64)
		case entactivity.FieldActivityName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field activity_name", values[i])
			} else if value.Valid {
				a.ActivityName = value.String
			}
		case entactivity.FieldActivityNote:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field activity_note", values[i])
			} else if value.Valid {
				a.ActivityNote = value.String
			}
		case entactivity.FieldUserID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field user_id", values[i])
			} else if value.Valid {
				a.UserID = value.Int64
			}
		case entactivity.FieldType:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field type", values[i])
			} else if value.Valid {
				a.Type = uint32(value.Int64)
			}
		case entactivity.FieldTotalDistance:
			if value, ok := values[i].(*sql.NullFloat64); !ok {
				return fmt.Errorf("unexpected type %T for field total_distance", values[i])
			} else if value.Valid {
				a.TotalDistance = value.Float64
			}
		case entactivity.FieldKcal:
			if value, ok := values[i].(*sql.NullFloat64); !ok {
				return fmt.Errorf("unexpected type %T for field kcal", values[i])
			} else if value.Valid {
				a.Kcal = float32(value.Float64)
			}
		case entactivity.FieldStartTime:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field start_time", values[i])
			} else if value.Valid {
				a.StartTime = value.Time
			}
		case entactivity.FieldEndTime:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field end_time", values[i])
			} else if value.Valid {
				a.EndTime = value.Time
			}
		case entactivity.FieldDuration:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field duration", values[i])
			} else if value.Valid {
				a.Duration = uint64(value.Int64)
			}
		case entactivity.FieldRoute:
			if value, ok := values[i].(*[]byte); !ok {
				return fmt.Errorf("unexpected type %T for field route", values[i])
			} else if value != nil && len(*value) > 0 {
				if err := json.Unmarshal(*value, &a.Route); err != nil {
					return fmt.Errorf("unmarshal field route: %w", err)
				}
			}
		case entactivity.FieldCreatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[i])
			} else if value.Valid {
				a.CreatedAt = value.Time
			}
		}
	}
	return nil
}

// Update returns a builder for updating this Activity.
// Note that you need to call Activity.Unwrap() before calling this method if this Activity
// was returned from a transaction, and the transaction was committed or rolled back.
func (a *Activity) Update() *ActivityUpdateOne {
	return (&ActivityClient{config: a.config}).UpdateOne(a)
}

// Unwrap unwraps the Activity entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (a *Activity) Unwrap() *Activity {
	_tx, ok := a.config.driver.(*txDriver)
	if !ok {
		panic("ent: Activity is not a transactional entity")
	}
	a.config.driver = _tx.drv
	return a
}

// String implements the fmt.Stringer.
func (a *Activity) String() string {
	var builder strings.Builder
	builder.WriteString("Activity(")
	builder.WriteString(fmt.Sprintf("id=%v, ", a.ID))
	builder.WriteString("activity_name=")
	builder.WriteString(a.ActivityName)
	builder.WriteString(", ")
	builder.WriteString("activity_note=")
	builder.WriteString(a.ActivityNote)
	builder.WriteString(", ")
	builder.WriteString("user_id=")
	builder.WriteString(fmt.Sprintf("%v", a.UserID))
	builder.WriteString(", ")
	builder.WriteString("type=")
	builder.WriteString(fmt.Sprintf("%v", a.Type))
	builder.WriteString(", ")
	builder.WriteString("total_distance=")
	builder.WriteString(fmt.Sprintf("%v", a.TotalDistance))
	builder.WriteString(", ")
	builder.WriteString("kcal=")
	builder.WriteString(fmt.Sprintf("%v", a.Kcal))
	builder.WriteString(", ")
	builder.WriteString("start_time=")
	builder.WriteString(a.StartTime.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("end_time=")
	builder.WriteString(a.EndTime.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("duration=")
	builder.WriteString(fmt.Sprintf("%v", a.Duration))
	builder.WriteString(", ")
	builder.WriteString("route=")
	builder.WriteString(fmt.Sprintf("%v", a.Route))
	builder.WriteString(", ")
	builder.WriteString("created_at=")
	builder.WriteString(a.CreatedAt.Format(time.ANSIC))
	builder.WriteByte(')')
	return builder.String()
}

// Activities is a parsable slice of Activity.
type Activities []*Activity

func (a Activities) config(cfg config) {
	for _i := range a {
		a[_i].config = cfg
	}
}
